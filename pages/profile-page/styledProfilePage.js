import styled from 'styled-components/native'
import { View } from 'react-native'

export const ProfilePageWrapper = styled.View`
    width: 100%;
    height: 100%;
    background: #F7D9F6;
    justify-content: center;
    align-items: center;

${props =>
    props.active === false ? 
        `
        display: none;
        `
    :
        `
        dispay: flex;
        `
}
`