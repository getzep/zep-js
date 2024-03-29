import { v4 as uuidv4 } from "uuid";
import {
   ICreateUserRequest,
   IUpdateUserRequest,
   ZepClient,
} from "../../src/index";

async function main() {
   const projectApiKey = process.env.ZEP_API_KEY;
   const projectApiUrl = process.env.ZEP_API_URL;

   const client = await ZepClient.init(projectApiKey, projectApiUrl);

   // Create multiple users
   for (let i = 0; i < 3; i++) {
      const userId = uuidv4();
      const userRequest: ICreateUserRequest = {
         user_id: userId,
         email: `user${i}@example.com`,
         first_name: `John${i}`,
         last_name: `Doe${i}`,
         metadata: { foo: "bar" },
      };

      try {
         const user = await client.user.add(userRequest);
         console.log(`Created user ${i + 1}: ${user.user_id}`);
      } catch (e) {
         console.log(`Failed to create user ${i + 1}: ${e}`);
      }
   }

   // Update the first user
   const { user_id } = (await client.user.list())[0];
   const userRequest: IUpdateUserRequest = {
      user_id,
      email: "updated_user@example.com",
      first_name: "UpdatedJohn",
      last_name: "UpdatedDoe",
      metadata: { foo: "updated_bar" },
   };

   try {
      const updatedUser = await client.user.update(userRequest);
      console.log(`Updated user: ${updatedUser.user_id}`);
   } catch (e) {
      console.log(`Failed to update user: ${e}`);
   }

   // Delete the second user
   const userIdToDelete = (await client.user.list())[1].user_id;
   try {
      await client.user.delete(userIdToDelete);
      console.log(`Deleted user: ${userIdToDelete}`);
   } catch (e) {
      console.log(`Failed to delete user: ${e}`);
   }

   // List all users
   try {
      console.log("All users:");
      for await (const users of client.user.listChunked()) {
         for (const user of users) {
            console.log(user.user_id);
         }
      }
   } catch (e) {
      console.log(`Failed to list users: ${e}`);
   }
}

main();
