import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageUtil from '../utils/ImageUtil'
import commaNumber from 'comma-number'

const Rating = require('../images/Rating.png')

const RatingInfo = ({ratingScore, ratingCount, style = {}}) => {
  const hasRatingInfo = ratingScore && ratingCount

  return (
    <View style={[styles.container, style]}>
      {hasRatingInfo && (
        <>
          <View>
            <ImageUtil source={Rating} size={12} />
          </View>
          <Text style={styles.ratingInfo}>
            {ratingScore} ({commaNumber(ratingCount)})
          </Text>
        </>
      )}
      {!hasRatingInfo && <View style={style} />}
    </View>
  )
}

RatingInfo.defaultProps = {
  style: {},
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingInfo: {
    fontSize: 14,
    marginLeft: 2,
    color: 'black',
  },
})

export default RatingInfo
