import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Post, PostProps } from "../../components/Post";

import { api } from "../../lib/axios";

import { Container, Input, Posts } from "./styles";

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const response = await api.get('/posts');
      const data = response.data as PostProps[];

      if (search.trim()) {
        setPosts(data.filter(post => post.title.includes(search)));
      } else {
        setPosts(data);
      }
    }

    fetchPosts();
  }, [search]);

  return (
    <Container>
      <Header />
      <main>
        <Input>
          <FiSearch />
          <input
            type="text"
            placeholder="Pesquisar pelo título"
            onChange={e => setSearch(e.target.value)}
          />
        </Input>

        <Posts>
          {
            posts ?
              posts.map(post => (
                <Post
                  key={String(post.id)}
                  userId={post.userId}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))
              :
              <span>Nenhum post</span>
          }

        </Posts>
      </main>
    </Container>
  )
}