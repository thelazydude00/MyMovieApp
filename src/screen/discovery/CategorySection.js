import * as React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CategoryItem from './CategoryItem';
import CategoryScaffold from './CategoryScaffold';
import {Spacer} from 'component';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CategorySection = ({title, data, limit = 5}) => {
  return (
    <View>
      <Text style={style.title}>{title}</Text>
      <Spacer height={10} />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <CategoryItem image={item.image} title={item.title} />;
        }}
        ListFooterComponent={() => (
          <View style={style.footerContainer}>
            <Spacer width={10} />
            <CategoryScaffold>
              <View style={style.moreContainer}>
                <View style={style.more}>
                  <Icon name="chevron-right" size={50} color="gray" />
                </View>
                <Spacer height={10} />
                <Text>Show More</Text>
              </View>
            </CategoryScaffold>
          </View>
        )}
        ItemSeparatorComponent={() => <Spacer width={10} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
  },
  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  more: {
    borderRadius: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default CategorySection;
