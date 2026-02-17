
import React from 'react';

const pastProjects = [
    {
        image: "https://picsum.photos/seed/collab1/600/400",
        title: "Dokumentasi Musik Hutan Festival",
        category: "Media Partner",
    },
    {
        image: "https://picsum.photos/seed/collab2/600/400",
        title: "Photoshoot 'Senja di Ibu Kota'",
        category: "Talent Collaboration",
    },
    {
        image: "https://picsum.photos/seed/collab3/600/400",
        title: "Workshop Lensa Fix Bersama Brand X",
        category: "Brand Sponsorship",
    },
    {
        image: "https://picsum.photos/seed/collab4/600/400",
        title: "Liputan Grand Opening Cafe Y",
        category: "Dokumentasi Acara",
    },
     {
        image: "https://picsum.photos/seed/collab5/600/400",
        title: "Review Gear: Tripod Terbaru Z",
        category: "Brand Partnership",
    },
    {
        image: "https://picsum.photos/seed/collab6/600/400",
        title: "Proyek TFP 'Urban Culture'",
        category: "Talent Collaboration",
    }
];

interface ProjectCardProps {
    project: typeof pastProjects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <div className="relative rounded-lg overflow-hidden group aspect-[3/2] shadow-lg">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90"></div>
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
            <p className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-wider">{project.category}</p>
            <h3 className="text-lg sm:text-xl font-bold mt-1">{project.title}</h3>
        </div>
    </div>
);

const PastCollaborations: React.FC = () => {
    return (
        <section className="py-20 bg-brand-gray">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Karya Kolaborasi Kami<span className="text-green-500">.</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Beberapa proyek yang telah kami kerjakan bersama mitra-mitra hebat.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {pastProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
             </div>
        </section>
    );
}

export default PastCollaborations;
