import { ReactNode, VFC } from "react"
import styled from "styled-components"

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = {
    children: ReactNode
    tag: HeadingType
}

export const Heading: VFC<Props> = ({
    children,
    tag,
}) => {
    return (
        <Wrapper as={tag}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.h1`
    margin: 0;
`