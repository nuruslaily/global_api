import React, {Component} from 'react';
import Mahasiswa from '../../component/BlogpostMahasiswa/Mahasiswa';
import './BlogpostMahasiswa.css';
import API from "../../services/index"

class BlogpostMahasiswa extends Component{
    state = {
        dataMahasiswa: [],
        insertBlog: {
            id: 1,
            Nim: 1,
            Nama: "",
            alamat: "",
            hp: "",
            angkatan: 1,
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getMahasiswa().then(result => {
            this.setState({
                dataMahasiswa: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapus = (data) => {
        API.deleteMahasiswa(data)
        .then((response) => {
            this.ambilDataDariServerAPI();
        })
    }

    handleTambah = (event) => {
        let formInsertBlog = {...this.state.insertBlog};
        let timestamp = new Date().getTime();
        formInsertBlog['id'] = timestamp;
        formInsertBlog[event.target.name] = event.target.value;
        this.setState({
            insertBlog: formInsertBlog
        });
    }

    handleTombolSimpan = () => {                // fungsi untuk meng-handle tombol simpan
        API.postMahasiswa(this.state.insertBlog)
        .then( (response) => {
            this.ambilDataDariServerAPI();
        });
    }

    render() {
        return(
            <div className = "post">
                <div className="form pb-2 border-bottom">
                    {/* <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambah}/>
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <label htmlFor="Nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="Nim" name="Nim" onChange={this.handleTambah}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Nama" className="col-sm-2 col-form-label">Nama Mahasiswa</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="Nama" name="Nama" onChange={this.handleTambah}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambah}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">No Hp</label>
                        <div className="col-sm-10">
                        <input type="number" className="form-control" id="hp" name="hp" onChange={this.handleTambah}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                        <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambah}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambah}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
            <h2>Daftar Mahasiswa</h2>
            {
                this.state.dataMahasiswa.map(blog => {
                    return <Mahasiswa Nim={blog.Nim} Nama={blog.Nama} alamat={blog.alamat} hp={blog.hp} angkatan={blog.angkatan} status={blog.status} idBlog={blog.id} hapus={this.handleHapus}/>
                })
            }
            </div>
        )
    }
}

export default BlogpostMahasiswa;