import { VFC } from "react"
import styled, { css } from "styled-components"
import { color, fontSize, radius, space } from "./constants"

type Props = {
    width?: number
    maxLength?: number
}

export const Textarea: VFC<Props> = ({ width = 300 }) => {
    return (
        <Wrapper width={width} />
    )
}

const Wrapper = styled.textarea<{ width: number }>`
    height: 120px;
    padding: ${space.m};
    border-radius: ${radius.m};
    border: solid 1px ${color.gray};
    font-size: ${fontSize.m};

    ${props =>
      css`
        width: ${props.width}px;
      `
    }
`