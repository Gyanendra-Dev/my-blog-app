const conf = {
    appwriteUrl: String(import.meta.env.VITE_REACTAPP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_REACTAPP_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_REACTAPP_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_REACTAPP_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_REACTAPP_BUCKET_ID)
}



export default conf