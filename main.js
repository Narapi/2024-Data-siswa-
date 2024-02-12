import { initializeApp } from " https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js ";

import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
  } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js ";


const firebaseConfig = {
  apiKey: "AIzaSyAQhFoRf_4ecIp-b7pclOk29ncMXpjzELE",
  authDomain: "insan-cemerlang-58879.firebaseapp.com",
  projectId: "insan-cemerlang-58879",
  storageBucket: "insan-cemerlang-58879.appspot.com",
  messagingSenderId: "704155633968",
  appId: "1:704155633968:web:42d7eeff6bb87ae7af60f5",
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarSiswa () {
  const siswaRef = collection(db,"siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querySnapshot = await getDocs(q);''

  let retval = [];
  querySnapshot.forEach((doc) => {
    retval.push({ id: doc.id, nama: doc.data().nama });
  });

  return retval;
} 

export async function tambahSiswa (val) {
  try{ 
    const docRef = await addDoc(collection(db,"siswa"),{
     nama: val  
    });
    console.log('Berhasil menyimpan dokumen dengan lD: '+ docRef.id);
     } catch (e) {
      console.log('Error menambah dokumen : ' + e);
 }
}
export async function hapusSiswa(docld){
  await deleteDoc(doc(db,"siswa",docld));
}

export async function ubahSiswa(docId,val) {
  await updateDoc(doc(db,"siswa",docId),{nama: val});
}

export async function ambilSiswa (docId) {
  const docRef = await doc(db,"siswa",docId);
  const docSnap = await getDoc(docRef);
  
  return await docSnap.data();
}