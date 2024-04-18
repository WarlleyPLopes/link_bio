import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 64px;
  margin: 4px auto;

  > button {
    width: 32px;
    height: 32px;
    background: #fff url(${({theme}) => theme.COLORS.Switch_bg_url}) no-repeat center;
    border: 0;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    transform: translateY(-50%);
    animation: ${({theme}) => theme.COLORS.keyframes} 0.2s forwards;
  }

  > button:hover {
    outline: 8px solid ${({theme}) => theme.COLORS.Highlight};
    cursor: pointer;

  }

  > span {
    display: block;
    width: 64px;
    height: 24px;
    background: ${({theme}) => theme.COLORS.Surface};
    border: 1px solid ${({theme}) => theme.COLORS.Stroke};
    backdrop-filter: blur(4px);
    border-radius: 9999px;
  }

  @keyframes slideIn {
    from {
      left: 0;
    }
    to {
      left: 50%;
    }
  }

  @keyframes slideBack {
    from {
      left: 50%;
    }
    to {
      left: 0;
    }
  }
`;
