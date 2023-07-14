<template>
    <div>

        <AdminNavbar></AdminNavbar>
        <div class="container" style="padding-top:8%">
            <div>
                <h1>Admin Panel - Contact Settings</h1>
                <form @submit.prevent="updateContactDetails">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" v-model="contactDetails.name" />
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" v-model="contactDetails.email" />
                    </div>
                    <div>
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" v-model="contactDetails.phone" />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import AdminNavbar from "../components/AdminNavbar.vue"
export default {
    components: {
        AdminNavbar
    },
    data() {
        return {
            contactDetails: {
                name: 'Admin Name',
                email: 'admin@example.com',
                phone: '1234567890'
            }
        };
    },
    methods: {
        updateContactDetails() {
            // Perform update logic here, e.g., send an API request to update the contact details
            console.log('Updated contact details:', this.contactDetails);
            // You can customize this method based on your specific requirements
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
input[type="tel"] {
    width: 200px;
    padding: 5px;
    margin-bottom: 10px;
}
</style>