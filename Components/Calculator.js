import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const calculateValue = () => {
    const d = eval(displayValue);
    setDisplayValue(d.toString());
  };
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="#eee" barStyle={'dark-content'} />
      <Text style={styles.heading}>Calculator</Text>
      <TextInput value={displayValue} style={styles.display} />

      {/* first line */}
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '7');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '8');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '9');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '+');
          }}
          style={[styles.btn, {backgroundColor: 'royalblue'}]}>
          <Text style={[styles.btnText, {color: 'white'}]}>+</Text>
        </TouchableOpacity>
      </View>

      {/* second line */}
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '4');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '5');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '6');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '-');
          }}
          style={[styles.btn, {backgroundColor: 'royalblue'}]}>
          <Text style={[styles.btnText, {color: 'white'}]}>-</Text>
        </TouchableOpacity>
      </View>

      {/* third line */}
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '1');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '2');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '3');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '*');
          }}
          style={[styles.btn, {backgroundColor: 'royalblue'}]}>
          <Text style={[styles.btnText, {color: 'white'}]}>x</Text>
        </TouchableOpacity>
      </View>

      {/* 4th line */}
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue('');
          }}
          style={[styles.btn, {backgroundColor: 'red'}]}>
          <Text style={[styles.btnText, {color: 'white'}]}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '0');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '.');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '/');
          }}
          style={[styles.btn, {backgroundColor: 'royalblue'}]}>
          <Text style={[styles.btnText, {color: 'white'}]}>/</Text>
        </TouchableOpacity>
      </View>

      {/* equal button */}
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={calculateValue}
          style={[styles.btn, {width: '100%', backgroundColor: 'red'}]}>
          <Text style={[styles.btnText, {color: 'white'}]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  heading: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  display: {
    width: '100%',
    backgroundColor: 'white',
    height: 70,
    borderRadius: 10,
    textAlign: 'right',
    fontSize: 25,
    padding: 10,
    marginTop: 20,
    elevation: 10,
  },
  btn: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  btnText: {
    fontSize: 20,
  },
});

export default Calculator;
