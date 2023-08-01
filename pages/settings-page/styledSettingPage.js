import styled from 'styled-components/native'
import { View } from 'react-native'

export const SettingsPageWrapper = styled.View`
    width: 100%;
    height: 100%;
    background: #F7D9F6;
    align-items: center;
    justify-content: center;
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