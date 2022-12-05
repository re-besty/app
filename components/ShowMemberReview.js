import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getApi} from "@src/services";

const GetMemberReview = (props) => {
  if (!props.user.id) {
    return <></>
  }

  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    const api = getApi(props.config);
    api.customRequest(
      'wp-json/buddyboss/v1/members/' + props.user.id, // success
      'get'
    ).then(response => setApiResponse(response.data.bt_review));
  }, []);

  return (
    <View>
    { apiResponse.ave
      ? <Text style={styles.container}>
          {apiResponse.label}: <Text style={styles.pointsWrapper}><Text style={styles.points}>{apiResponse.ave}</Text>/5点</Text>
        </Text>
      : <></>
    }
    </View>
  );
}

const mapStateToProps = (state) => ({
  config: state.config,  // not needed if axios or fetch is used
  accessToken: state.auth.token,
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    textAlign: "center",
    color: '#000000'
  },
  pointsWrapper: {
    fontWeight: "bold",
  },
  points: {
    color: "#cc9a06"
  }
});

const ShowMemberReview = connect(mapStateToProps)(GetMemberReview);

export default ShowMemberReview;
