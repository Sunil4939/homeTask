import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, ImageBackground, SafeAreaView, StatusBar } from 'react-native'
import React, { memo } from 'react'
import { COLORS, SIZES, images } from '../../constants'
import Loader from '../loading/Loader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const MainView = ({ scroll, bg, children, mainStyle, center, loading, modalLoading, renderTopOuterComponent, renderBottomOuterComponent, statusBarBg, statusBarHide }) => {

    return (
        <SafeAreaView style={[styles.container, bg && { backgroundColor: bg }, mainStyle]}>
        {statusBarBg === COLORS.transparent ? (
            <StatusBar
                translucent={true}
                backgroundColor={COLORS.transparent}
                barStyle="light-content"
                hidden={statusBarHide}
            />
        ) : (
            <StatusBar
                backgroundColor={statusBarBg}
                barStyle={statusBarBg === COLORS.white ? 'dark-content' : 'light-content'}
                hidden={statusBarHide}
            />
        )}
        {modalLoading && <Loader loading={modalLoading} />}

        {renderTopOuterComponent}
        {loading ? (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size={SIZES.width * 0.12} color={COLORS.primary} />
            </View>
        ) : (
            <View style={{ flex: 1 }}>
                {scroll ? (
                    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                        {children}
                    </KeyboardAwareScrollView>
                ) : (
                    <>{children}</>
                )}
            </View>
        )}
        {renderBottomOuterComponent}
    </SafeAreaView>
    )
}

MainView.defaultProps = {
    statusBarBg: COLORS.white,
}

export default MainView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    loading: {
        width: SIZES.width * .18,
        height: SIZES.width * .18,
        alignSelf: 'center',
        // tintColor: COLORS.primary,
    }
})