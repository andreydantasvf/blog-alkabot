import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { CommentPost } from "../../components/CommentPost";

import { Header } from "../../components/Header";
import { PostProps, UserInfo } from "../../components/Post";
import { api } from "../../lib/axios";

import { Container, Post, ImageUser, Content, Comments } from "./styles";

interface CommentsInfo {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export function PostDetails() {
  const [post, setPost] = useState<PostProps>();
  const [comments, setComments] = useState<CommentsInfo[]>([]);
  const [user, setUser] = useState<UserInfo>({ name: "", email: "" });

  const params = useParams();

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(`/posts/${params.id}`);
      setPost(response.data);

      const user = await api.get(`/users/${response.data.userId}`);
      setUser(user.data);
    }

    async function fetchComments() {
      const response = await api.get(`/posts/${params.id}/comments`);
      setComments(response.data);
    }

    fetchPost();
    fetchComments();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <BackButton />
        <Post>
          <ImageUser>
            <FaUserAlt />
          </ImageUser>

          <Content>
            <div className="user">
              <span className="name">{user.name}</span>
              <span className="email">{user.email}</span>
            </div>

            <h2>{post?.title}</h2>
            <span>{post?.body}</span>
          </Content>
        </Post>

        <span className="count-comments">Comentários ({comments.length})</span>

        <Comments>
          {comments &&
            comments.map(comment => (
              <CommentPost
                key={String(comment.id)}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))
          }
        </Comments>
      </main>
    </Container>
  )
}