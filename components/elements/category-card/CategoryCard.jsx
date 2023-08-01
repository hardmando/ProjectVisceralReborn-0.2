import CardButton from "../card-button/CardButton";
import { CategoryCardWrapper, ClosePopUpPressable, PopUpWrapper, PopUpContentWrapper, CardTitle, CardTotal } from "./styledCategoryCard";
import { Modal, View, Pressable, Text } from "react-native";
import { useState } from "react";
import PopUp from "../pop-up/PopUp";

const CategoryCard = ({title, cardTotal}) => {
    const [modalVisible, setModalVisible] =  useState(false)

    return(
        <CategoryCardWrapper>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
                style={{
                    marginTop: 20
                }}
            >
                <PopUpContentWrapper>
                    <Text>Hello World!</Text>
                    <ClosePopUpPressable
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Hide Modal</Text>
                    </ClosePopUpPressable>
                </PopUpContentWrapper>
            </Modal>
            <CardTitle>{title}</CardTitle>
            <CardTotal>{cardTotal} $</CardTotal>
            <CardButton 
                setModalVisible={setModalVisible}
            />
        </CategoryCardWrapper>
    )
}
export default CategoryCard;