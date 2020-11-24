import React from 'react';
import {ScrollView, View} from 'react-native';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {Icon} from 'react-native-eva-icons';
import HelperText from '../utils/HelperText';

class WritingBox extends React.Component {
  constructor(props) {
    super(props);
    this.style = props.style;
    this.richText = React.createRef();
    this.state = {
      isToolbarActivated: false,
    };
  }

  render() {
    const {
      viewStyle,
      scrollStyle,
      toolbarStyle,
      containerStyle,
      editorStyle,
      colors,
      freestyle,
      setNote,
      disabled,
      note,
    } = this.props;
    const initHTML = note ? note : freestyle === true ? '' : HelperText;
    const insertCheckBox = () => {
      this.richText?.current?.insertHTML('<input type="checkbox" />...<br>');
    };
    return (
      <>
        {this.state.isToolbarActivated === true && (
          <RichToolbar
            style={toolbarStyle}
            editor={this.richText}
            unselectedButtonStyle={colors.notification}
            selectedIconTint={colors.text}
            disabledIconTint={colors.notification}
            disabledButtonStyle={colors.notification}
            iconTint={colors.notification}
            iconSize={40}
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              'insertCheckBox',
            ]}
            iconMap={{
              insertCheckBox: ({tintColor}) => (
                <Icon
                  style={{color: tintColor}}
                  name="checkmark-square-2-outline"
                  width={25}
                  height={25}
                  fill={tintColor}
                />
              ),
            }}
            insertCheckBox={insertCheckBox}
          />
        )}
        <View style={viewStyle}>
          <ScrollView style={scrollStyle} showsVerticalScrollIndicator={false}>
            <View>
              <RichEditor
                onChange={(value) => {
                  setNote(value).bind(this);
                }}
                ref={this.richText}
                placeholder={disabled === true ? '' : 'How do you feel Today ?'}
                initialContentHTML={initHTML}
                editorInitializedCallback={() =>
                  this.setState({isToolbarActivated: !disabled})
                }
                containerStyle={containerStyle}
                editorStyle={editorStyle}
                disabled={disabled}
              />
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

export default WritingBox;
