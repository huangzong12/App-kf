/**
 * Created by guoshuyu on 2017/11/12.
 */
import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';

import * as Constant from '../../style/constant'
import styles from '../../style'
import Icon from 'react-native-vector-icons/FontAwesome'
import UserImage from './UserImage'
import IconTextItem from './IconTextItem'

/**
 * 仓库相关Item显示
 */
class RepositoryItem extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        let {
            ownerName,
            ownerPic,
            repositoryName,
            repositoryStar,
            repositoryFork,
            repositoryWatch,
            repositoryType,
            repositoryDes,
            repositoryStared,
            repositoryForked,
            repositoryWatched
        } = this.props;

        let bottomIconStyle = {
            backgroundColor: Constant.transparentColor,
            color: Constant.subTextColor, size: Constant.minIconSize,
            marginTop: Constant.normalMarginEdge / 2,
            marginLeft: -Constant.normalMarginEdge / 2
        };
        return (
            <View style={[{
                backgroundColor: Constant.white,
                marginTop: Constant.normalMarginEdge,
                marginHorizontal: Constant.normalMarginEdge,
                paddingHorizontal: Constant.normalMarginEdge,
                paddingTop: Constant.normalMarginEdge,
                borderRadius: 4,
            }, styles.shadowCard]}>
                <View style={[styles.flexDirectionRowNotFlex]}>
                    <UserImage uri={ownerPic}
                               userName={ownerName}
                               resizeMethod="scale"
                               style={[{
                                   height: Constant.normalIconSize, width: Constant.normalIconSize,
                                   marginRight: Constant.normalMarginEdge,
                                   borderRadius: Constant.normalIconSize / 2,
                                   marginTop: 2
                               }]}/>
                    <View style={[styles.flexDirectionRow]}>
                        <View>
                            <Text style={[styles.normalText, {fontWeight: "bold"}]}>{repositoryName}</Text>
                            <IconTextItem
                                iconColor={Constant.subLightTextColor}
                                text={ownerName} icon={'group'}
                                textstyle={[styles.subLightSmallText]}/>
                        </View>
                        <View style={[styles.flex, styles.alignItemsEnd, {
                            marginRight: Constant.normalMarginEdge / 2,
                            marginTop: -5
                        }]}>
                            <Text style={{color: Constant.subTextColor, fontSize: Constant.minTextSize}}>
                                {repositoryType}
                            </Text>
                        </View>
                    </View>
                </View>
                <Text
                    numberOfLines={Constant.normalNumberOfLine}
                    style={[styles.subSmallText, {marginTop: Constant.normalMarginEdge / 2,}]}>
                    {repositoryDes}
                </Text>
                <View style={[styles.flexDirectionRowNotFlex,]}>
                    <View style={[styles.flex, styles.centered,]}>
                        <Icon.Button name="star-o" {...bottomIconStyle}>
                            <Text style={[styles.subSmallText]}>{repositoryStar}</Text>
                        </Icon.Button>
                    </View>
                    <View style={[styles.flex, styles.centered,]}>
                        <Icon.Button name="code-fork" {...bottomIconStyle}>
                            <Text style={[styles.subSmallText]}>{repositoryFork}</Text>
                        </Icon.Button>
                    </View>
                    <View style={[styles.flex, styles.centered,]}>
                        <Icon.Button name="eye" {...bottomIconStyle}>
                            <Text style={[styles.subSmallText]}>{repositoryWatch}</Text>
                        </Icon.Button>
                    </View>
                </View>
            </View>
        );
    }
}

const propTypes = {
    ownerName: PropTypes.string,
    ownerPic: PropTypes.string,
    repositoryName: PropTypes.string,
    repositoryStar: PropTypes.number,
    repositoryFork: PropTypes.number,
    repositoryWatch: PropTypes.number,
    repositoryType: PropTypes.string,
    repositoryDes: PropTypes.string,
    repositoryStared: PropTypes.bool,
    repositoryForked: PropTypes.bool,
    repositoryWatched: PropTypes.bool,
};

RepositoryItem.propTypes = propTypes;
RepositoryItem.defaultProps = {
    repositoryDes: '---',
    repositoryStar: '---',
    repositoryFork: '---',
    repositoryWatch: '---',
    repositoryType: '---',
    repositoryStared: false,
    repositoryForked: false,
    repositoryWatched: false,
};


export default RepositoryItem;