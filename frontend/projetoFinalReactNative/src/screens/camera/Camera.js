import { Camera, CameraType } from 'expo-camera';
import { useState,useEffect, useRef} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonCustom from '../../components/button/button';
export default function CameraExpo() {
  let cameraRef = useRef()
 
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState()
  useEffect(()=>{


  },[])
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePic() {
    let options = {
      quality: 1,
      base64: true,
      exif:false,
    }
    let newPhoto = await cameraRef.current.takePictureAsync(options)
    setPhoto(newPhoto);
 
  }
  if(photo){
    //console.log(photo)
    let sharePic = ()=>{

    }
    let savePhoto = ()=>{

    }
    let sendPic =()=>{

    }

    return(
      <SafeAreaView style = {styles.container}>
        <ImageBackground style={styles.preview} source={{uri: "data:image/jpg;base64," + photo.base64 }}>
          <View style={styles.sendButton}>
          <ButtonCustom
          title = {''}
          size={60}
           icon={'trash-bin-outline'} 
           color = {'#34c3eb'}
          />
           <ButtonCustom
          title = {''}
          size={60}
           icon={'send'} 
           color = {'#34c3eb'}
          />

          </View>
        </ImageBackground>
      </SafeAreaView>
    ) 
  }

  return (
    <View style={styles.container}>
      <Camera onCameraReady={()=>{}} style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          
          <TouchableOpacity style={styles.buttonCamera} onPress={toggleCameraType}>
          <Ionicons 
            name="camera-reverse-outline" 
            size={50}
            color={'#f5f9fa'} 
          />
          </TouchableOpacity>
          {/* //take picks button */}
          <TouchableOpacity style={styles.buttonCircle} onPress={takePic} >
          <Ionicons 
            name="ellipse-outline" 
            size={80}
            color={'#f5f9fa'} 
          />
          </TouchableOpacity>
       
        </View>
        <Text style={styles.textFooter}>Toque para foto</Text>
      </Camera>
    </View>
  );
}

