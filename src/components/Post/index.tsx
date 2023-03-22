import { useEffect, useState } from "react";
import { FaUserAlt, FaRegComment } from "react-icons/fa";
import { api } from "../../lib/axios";

import { Container, ImageUser, Content } from "./styles";

export interface PostProps {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface UserInfo {
  name: string,
  username: string,
}

export function Post({ userId, id, title, body }: PostProps) {
  const [user, setUser] = useState<UserInfo>({ name: "", username: "" });
  const [countComments, setCountComments] = useState(0);

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/users/${userId}`);
      setUser(response.data);
    }

    async function fetchComments() {
      const response = await api.get(`/posts/${id}/comments`);
      setCountComments(response.data.length);
    }

    fetchUser();
    fetchComments();
  }, []);

  return (
    <Container>
      <ImageUser>
        <FaUserAlt />
      </ImageUser>

      <Content>
        <div className="user">
          <span className="name">{user.name}</span>
          <span className="user-name">@{user.username}</span>
        </div>

        <h2>{title}</h2>
        <span>{body}</span>

        <div className="comments">
          <FaRegComment />
          {countComments}
        </div>
      </Content>
    </Container>
  )
}