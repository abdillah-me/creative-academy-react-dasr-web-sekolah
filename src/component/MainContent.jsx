import Hero from "./Hero";
import CardJurusan from "./CardJurusan";
import ImageJurusan1 from "../assets/Hero1.jpeg";
import ImageJurusan2 from "../assets/Hero2.jpeg";
import ImageJurusan3 from "../assets/Hero3.jpeg";
import CardKegiatan from "./CardKegiatan";

const MainContent = () => {
   return (
      <>
         <Hero />
         <div className="container">
            <div className="row">
               <div className="col-12 text-center my-4">
                  <h1 className="fw-bold">Jurusan Sekolah</h1>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 col-12 my-2">
                  <CardJurusan image={ImageJurusan1} />
               </div>
               <div className="col-md-4 col-12 my-2">
                  <CardJurusan image={ImageJurusan2} />
               </div>
               <div className="col-md-4 col-12 my-2">
                  <CardJurusan image={ImageJurusan3} />
               </div>
            </div>
            <div className="row my-3">
               <h1 className="text-center fw-bold">Kegiatan</h1>
               <div className="col-12 mt-3">
                  <CardKegiatan
                     image={ImageJurusan2}
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum."
                  />
               </div>
               <div className="col-12 mt-3">
                  <CardKegiatan
                     image={ImageJurusan2}
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum."
                  />
               </div>
               <div className="col-12 mt-3">
                  <CardKegiatan
                     image={ImageJurusan2}
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum."
                  />
               </div>
               <div className="col-12 mt-3">
                  <CardKegiatan
                     image={ImageJurusan2}
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum."
                  />
               </div>
               <div className="col-12 mt-3">
                  <CardKegiatan
                     image={ImageJurusan2}
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum."
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default MainContent;
