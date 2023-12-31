import styled from 'styled-components/native'

export const CategoryCardWrapper = styled.View`
    background: #F7D9F6;
    width: 101%;
    height: 8.5%;
    border: 1px solid #0A220F;
    border-collapse: collapse;
    margin-top: 5%;
    justify-items: center;
`
export const CardTitle = styled.Text`

`
export const ClosePopUpPressable = styled.Pressable`
    background: #2196F3;
    width: 30%;
    height: 40%;
    align-self: center;
`
export const PopUpContentWrapper = styled.View`
    background: white;
    justify-items: center;
    align-items: center;
    width: 80%;
    height: 50%;
    margin: auto;
    border: 1px black solid;
    border-radius: 10%;
`
export const PopUpWrapper = styled.View`
    background: blue;
    justify-items: center;
    align-items: center;
    position: absolute;
    width: 100%;
`