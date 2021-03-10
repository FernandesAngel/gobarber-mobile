import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 34px 0 14px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0%;
  right: 0;
  bottom: 0;
  background: #312e38;
  border-top-width: 1px;
  border-top-color: #232129;
  padding: 10px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-family: 'RobotoSlabRegular';
  margin-left: 16px;
`;
