import { ContainerScreen } from "@/components/container-screen";
import { COLORS, FONT_SIZES, FONTS } from "@/themes";
import { Text } from 'react-native';

export default function Welcome() {
    return (
        <ContainerScreen>
            <Text
                style={{
                    color: COLORS.primary,
                    fontSize: FONT_SIZES.xlarge,
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: FONTS.roboto_bold,
                }}
            >
                Bem-vindo 🪷
            </Text>
        </ContainerScreen>
    )
}