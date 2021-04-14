import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getMahasiswa = () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postMahasiswa = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);
const deleteMahasiswa = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus);

const API = {
    getMahasiswa,
    postMahasiswa,
    deleteMahasiswa
}

export default API;