
import styled from "styled-components";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: #ffffff;
  background-color: ${(props) => (props.primary ? "#008BF5" : "#38618C")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? "#007FE0" : "#5083B9")};
  }
  &:active {
    border: solid 2px #007FE0;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;