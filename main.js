import { initializeApp } from " https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js ";

import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deletDoc,
  doc,
  query,
  orderBy
  } from " https://www.gstatic.com/firebasejs/10.7.2/ firebase-firebsetore.js ";


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

export async function ambilDaftarsiswa () {
  const siswRef = collection(db,"siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querysnapshot = await getDocs(q);
  
  let retval = [];
  querySnapshot.forEach((doc) => {
    retval.push({ id: doc,id, nama: doc.Data().nama });
  });
  
  return retval;
}