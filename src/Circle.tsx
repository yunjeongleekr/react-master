import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// interface : object 의 shape을 설명.
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  // borderColor가 undifinded면? "..." 값을 넣어줌
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "blue"}>
      {text}
    </Container>
  );
}

export default Circle;
