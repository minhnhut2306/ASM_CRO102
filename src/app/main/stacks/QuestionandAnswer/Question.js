import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../multiComponent/CostomHeader';
import {useNavigation} from '@react-navigation/native';

const Question = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const toggleExpand2 = () => {
    setExpanded2(!expanded2);
  };
  const toggleExpand3 = () => {
    setExpanded3(!expanded3);
  };
  const toggleExpand4 = () => {
    setExpanded4(!expanded4);
  };
  const toggleExpand5 = () => {
    setExpanded5(!expanded5);
  };
  const handleLeftIconPress = () => {
    navigation.navigate('MainTabNavigation')
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
        title={'Q & A'}
        onPressLeftIcon={handleLeftIconPress}
      />
      <View style={styles.textcontainerlist}>
        <View>
          <TouchableOpacity style={styles.header} onPress={toggleExpand}>
            <Text style={styles.headerText}>
              Tôi trộn các chất dinh dưỡng theo thứ tự nào?
            </Text>
            <Image
              style={styles.iconarrow}
              source={
                expanded
                  ? require('../../../../../assets/icons/upload.png')
                  : require('../../../../../assets/icons/arrowdown.png')
              }
            />
          </TouchableOpacity>
          {expanded && (
            <View style={styles.content}>
              <Text style={[styles.headerText, {color: 'gray', left: 10}]}>
                A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy
                sục oxy vào thì khơi pha dd sẽ tan đều.
              </Text>
            </View>
          )}
        </View>

        {/* phần 2 */}
        <TouchableOpacity style={styles.header} onPress={toggleExpand2}>
          <Text style={[styles.headerText, {left: 10}]}>
            Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?
          </Text>
          <Image
            style={styles.iconarrow}
            source={
              expanded2
                ? require('../../../../../assets/icons/upload.png')
                : require('../../../../../assets/icons/arrowdown.png')
            }
          />
        </TouchableOpacity>
        {expanded2 && (
          <View style={styles.content}>
            <Text style={[styles.headerText, {color: 'gray'}]}>
              Dinh dưỡng cao cấp nên ko có hạn sử dụng, chỉ cần bảo quản tốt
              dưới nhiệt độ mát, tránh ánh sáng trực tiếp là sẽ để được rất lâu,
              Để duy trì mức dinh dưỡng tối ưu, chúng tôi khuyên bạn nên thay
              đổi hồ chứa thuỷ canh của bạn sau mỗi 7 ngày, còn với thổ canh thì
              pha lần nào tưới lần đó, thừa thì bỏ lần sau pha mới. Đặc biệt có
              vi sinh Mycorrhizae có hạn sử dụng sau 2 năm kể từ ngày mua.
            </Text>
          </View>
        )}
        {/* phần 3 */}
        <TouchableOpacity style={styles.header} onPress={toggleExpand3}>
          <Text style={[styles.headerText, {left: 0}]}>
            Khi nào tôi thêm bộ điều chỉnh pH?
          </Text>
          <Image
            style={styles.iconarrow}
            source={
              expanded3
                ? require('../../../../../assets/icons/upload.png')
                : require('../../../../../assets/icons/arrowdown.png')
            }
          />
        </TouchableOpacity>
        {expanded3 && (
          <View style={styles.content}>
            <Text style={[styles.headerText, {color: 'gray'}]}>
              Sau khi bạn thêm A-F nhưng trước khi bạn thêm line E Root Igniter
              vào thì phải căn chỉnh pH trước rồi. PH tối ưu là giữa 5,8-6,3,
              nấm rễ phát triển tốt hơn khi pH chuẩn, dinh dưỡng đủ. Bạn cần
              thêm 1 số công cụ bút đo nữa nhé.
            </Text>
          </View>
        )}
        {/* phần 4 */}
        <TouchableOpacity style={styles.header} onPress={toggleExpand4}>
          <Text style={[styles.headerText, {left: 0}]}>
            Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm
            Planta không?
          </Text>
          <Image
            style={styles.iconarrow}
            source={
              expanded4
                ? require('../../../../../assets/icons/upload.png')
                : require('../../../../../assets/icons/arrowdown.png')
            }
          />
        </TouchableOpacity>
        {expanded4 && (
          <View style={styles.content}>
            <Text style={[styles.headerText, {color: 'gray'}]}>
              Không. Chúng tôi không sử dụng bất kỳ chất điều chỉnh tăng trưởng
              nào trong dòng Nutrient của mình. Điều này bao gồm Paclobutrazol
              và Daminozide, được chứng minh là có ảnh hưởng tiêu cực đến sức
              khỏe khi con người ăn phải, đặc biệt là Ung Thư.
            </Text>
          </View>
        )}
        {/* phần 5 */}
        <TouchableOpacity style={styles.header} onPress={toggleExpand5}>
          <Text style={[styles.headerText, {left: 0}]}>
            Các sản phẩm Planta có phải là hữu cơ không?
          </Text>
          <Image
            style={styles.iconarrow}
            source={
              expanded5
                ? require('../../../../../assets/icons/upload.png')
                : require('../../../../../assets/icons/arrowdown.png')
            }
          />
        </TouchableOpacity>
        {expanded5 && (
          <View style={styles.content}>
            <Text style={[styles.headerText, {color: 'gray'}]}>
              Các sản phẩm dinh dưỡng của chúng tôi là sự pha trộn của tất cả
              các thành phần hữu cơ và vô cơ tự nhiên, không chứa hormone, nước
              hoa, thuốc nhuộm hoặc chất điều hòa tăng trưởng. Chúng đã được
              thiết kế đặc biệt để tối đa hóa khả dụng sinh học của các chất
              dinh dưỡng để hấp thụ và hiệu quả tối ưu. Chúng tôi hiểu được sự
              hấp thụ của một khu vườn hữu cơ. Quan trọng hơn, độ chính xác như
              vậy mang lại kết quả vượt trội với một giải pháp hoàn toàn hữu cơ.
              Chúng tôi tiếp tục phát triển các sản phẩm hữu cơ để thử nghiệm và
              sẽ cung cấp cho các thị trường dựa trên những kết quả chúng tôi
              thu thập được .
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  textcontainerlist: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 48,
    paddingVertical: 15,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  header: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#000',
    lineHeight: 22,
  },
  content: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    right: 10,
  },
  iconarrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    marginLeft: 20,
  },
});
