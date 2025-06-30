import { useTheme } from "@react-navigation/native";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CustomDeleteModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const CustomDeleteModal: React.FC<CustomDeleteModalProps> = ({
  visible,
  onCancel,
  onConfirm,
}) => {
  const { dark } = useTheme();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
      statusBarTranslucent={true}
    >
      <View style={styles.modalOverlay}>
        <View style={[
          styles.modalContainer,
          dark ? styles.darkModalContainer : styles.lightModalContainer
        ]}>
          <Text style={[
            styles.title,
            dark ? styles.darkTitle : styles.lightTitle
          ]}>
            Are you sure you want to log out?
          </Text>

          <Text style={[
            styles.message,
            dark ? styles.darkMessage : styles.lightMessage
          ]}>
            You will need to log in again to access your account.
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={onCancel}
              activeOpacity={0.8}
              style={[
                styles.button,
                styles.cancelButton,
                dark ? styles.darkCancelButton : styles.lightCancelButton
              ]}
            >
              <Text style={[
                styles.buttonText,
                dark ? styles.darkCancelText : styles.lightCancelText
              ]}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onConfirm}
              activeOpacity={0.8}
              style={[styles.button, styles.confirmButton]}
            >
              <Text style={styles.confirmButtonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  lightModalContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkModalContainer: {
    backgroundColor: '#1E293B',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  lightTitle: {
    color: '#1F2937',
  },
  darkTitle: {
    color: '#F8FAFC',
  },
  message: {
    color: '#888888',
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 24,
  },
  lightMessage: {
    color: '#64748B',
  },
  darkMessage: {
    color: '#CBD5E1',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  cancelButton: {
    borderWidth: 1,
  },
  lightCancelButton: {
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  darkCancelButton: {
    borderColor: '#334155',
    backgroundColor: '#1E293B',
  },
  confirmButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
  },
  lightCancelText: {
    color: '#475569',
  },
  darkCancelText: {
    color: '#E2E8F0',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CustomDeleteModal;