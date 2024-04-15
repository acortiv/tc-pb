import PocketBase from 'pocketbase';

async function initPocketBase() {
    const pb = new PocketBase(`${process.env.NEXT_PUBLIC_API_URL}`);
    console.log(`${process.env.NEXT_PUBLIC_API_URL}`);
    return pb;
};

export async function getProjects() {
    const pb = await initPocketBase();
    try {
        const projects = await pb.collection('projects').getFullList({ sort: '-created' });

        // Fetch and assign image URLs for each project
        const projectsWithImages = await Promise.all(projects.map(async project => {
            const imageUrl = pb.files.getUrl(project, project.image); // Assuming 'image' is the field name
            return {
                ...project,
                imageUrl, // Add the image URL to each project object
            };
        }));

        console.log('Result: ', projectsWithImages);
        return projectsWithImages;
    } catch (error) {
        console.log("Error: ", error);
        return null;
    }
}


export async function getResume() {
    const pb = await initPocketBase();
    try {
        const record = await pb.collection('resume').getOne('5bgqdcwzz8h2500');
        const resumeFilename = record.resume_file; // Assuming 'resume_file' is the field name
        // Generate the file URL without specifying a thumbnail size
        const url = pb.files.getUrl(record, resumeFilename);
        return url;
    } catch (error) {
        console.log("Error: ", error);
        return null;
    }
};