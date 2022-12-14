import { Camera, CameraType } from 'expo-camera';
import { useState,useEffect, useRef} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import PrintedCamera from '../printedCamera/PrintedCamera';

export default function CameraExpo({navigation}) {
  let cameraRef = useRef() as any
 
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState()
  

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos de sua permissão para usar a camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePic() {
    let options = {
      quality: 0.5, skipProcessing: true, fixOrientation: false,
      // quality: 1,
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
      <PrintedCamera
      photo={photo}     
      setPhoto={setPhoto}/>
    ) 
  }

  return (

    <View style={styles.container}>
    
      <View style= {{backgroundColor:'black',}}>
      <TouchableOpacity style={styles.circleButton}  onPress={()=>{      
        navigation.navigate('Messages')}}>
    <Text style={styles.text}>x</Text>
    </TouchableOpacity>
          </View>
    
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

