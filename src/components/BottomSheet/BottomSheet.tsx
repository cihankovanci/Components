import React, { FC } from "react";
import { View, Modal, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView } from "react-native";
import NotificationContainer from "../Draggable/NotificationCard";


type BottomSheetProps = {
  isVisible: boolean;
  children: any;
  onDismiss: () => void;
};

const BottomSheet: FC<BottomSheetProps> = props => {
  const handleTouchOutsideModal = () => {
    props.onDismiss();
  };

  return (
    <>
      <Modal visible={props.isVisible} animationType="slide" presentationStyle="overFullScreen" transparent={true}>
    <NotificationContainer style={{flex:1, backgroundColor:'transparent'}} threshold={80} onOut={props.onDismiss}>

        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={handleTouchOutsideModal}>
          <View style={styles.modalBackground}>
            <KeyboardAvoidingView behavior="padding" style={styles.bottomView}>
              <TouchableWithoutFeedback>
                <View
                  style={{
                    backgroundColor: '#F8F9FC',
                    borderRadius: 20,
                    paddingVertical: 25,
                    paddingHorizontal: 10,
                    marginBottom: -150,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5
                  }}
                >
                  {props.children}
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </NotificationContainer>

      </Modal>
    </>
  );
};

export default BottomSheet;

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    paddingBottom:100,

     backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  bottomView: {
    flex: 1,
    justifyContent: "flex-end",

    // backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
});
