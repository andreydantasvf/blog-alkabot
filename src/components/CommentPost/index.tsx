import { FaUserAlt } from "react-icons/fa";
import { Container, ImageUser, Content, } from "./styles";

interface CommentProps {
  name: string,
  email: string,
  body?: string
}

export function CommentPost({ name, email, body }: CommentProps) {
  return (
    <Container>
      <ImageUser>
        <FaUserAlt />
      </ImageUser>

      <Content>
        <div className="user">
          <span className="name">{name}</span>
          <span className="email">{email}</span>
        </div>
        
        <span>{body}</span>
      </Content>
    </Container>
  )
}