import BlogItem from "@/components/BlogItem";

export default function BlogPage() {
  return <div className="we_do">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="titlepage text_align_center">
                 <h2>Blog</h2>
              </div>
           </div>
        </div>

        <BlogItem
          title="Solar Energy Systems"
          href="/blog/solar-systems"
          text="Solar energy is radiant light and heat from the Sun that is harnessed using a range of technologies such as solar power to generate electricity, solar thermal energy (including solar water heating), and solar architecture.."
          src="/blog-solar.jpg"
        />

        <BlogItem
          title="Water treatment"
          href="/blog/Water-treatment"
          text="Water treatment is any process that improves the quality of water to make it appropriate for a specific end-use. The end use may be drinking, industrial water supply, irrigation, river flow maintenance, water recreation or many other uses, including being safely returned to the environment."
          src="/blod-water.webp"
        />

        <BlogItem
          title="Educational technology"
          href="/blog/Educational-technology"
          text="IST has a division specializing in educational technology. The company seeks to transform the educational process from just a student receiving education from teachers to an integrated interactive educational system in which the student is the main focus in order to keep pace with digital development through smart solutions and specialized educational programs..."
          src="/blog-Education.jpg"
        />

        <BlogItem
          title="Fire Fighting & Fire Alarm Systems"
          href="/blog/Fire-fighting-&-alarm"
          text="Firefighting is a profession aimed at controlling and extinguishing fire. A person who engages in firefighting is known as a firefighter or fireman.A fire alarm system is a building system designed to detect and alert occupants and emergency forces of the presence of smoke, fire, carbon monoxide, or other fire-related emergencies"
          src="/blog-fire-fighting.jpg"
        />
     </div>
  </div>
}