import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('85b3642b-21e5-425e-9e0c-089a7cd31cc1', '1Trent92@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv12345abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b65f3f74-9afb-48dc-85ab-3fe84956d964', '9Jaquelin0@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv44556jkl', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('1cbe7a8f-2622-4e44-b5cb-1efcf70e680e', '17Emma_Weber46@gmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv12345abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('7dd6bae1-3b09-4338-ba3d-0826fce9d661', '25Karl47@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv44556jkl', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('aef683de-a55d-4d90-8a1d-213a7ed1cfe7', '33Kaleigh14@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv77889mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0bb8a72a-7713-4a6e-90c7-14ba5d283bc9', '49Kylie.Murphy46@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv11223ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ec21b439-9a24-4ee8-b2fc-cef31ee0059c', '57Wilber81@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv67890def', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('939be57c-3675-4fca-b537-23d78dabcbd0', '65Isabella_Cole88@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv11223ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c1c40d4c-b7ef-4eb4-b6ab-2eddb7deddb8', '73Prudence15@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv12345abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('020bab00-df4b-4fa6-b385-a46b8cbd7d66', 'IdeaHub', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('6c5531c7-3013-4542-86f9-369f4b68b9c9', 'IdeaHub', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('13fe5f17-866b-4513-a2e8-543d83f5e455', 'CreativeMinds', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('6452e1a3-a77e-4acd-b3f6-f7d65b9771ab', 'FutureThink', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('651e624f-c0c2-4235-a543-476d7a7ecd11', 'GlobalIdeas', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('f1b56048-04da-45e3-947d-60a614de08d5', 'CreativeMinds', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('f4312f39-deae-4c5f-9ce5-f6046d9d7136', 'InnovateCorp', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a77ee3c8-1330-4bad-9ff4-aa00e4bd630b', 'GlobalIdeas', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('88c34593-e2e5-4d14-8943-34f71d9c37f7', 'CreativeMinds', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('76f36692-c778-4901-a6f4-d814f50a55dd', 'InnovateCorp', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f9ee8f6f-f8ed-4ec8-b91d-24be839518c7', 'Creative Director', '7dd6bae1-3b09-4338-ba3d-0826fce9d661', '76f36692-c778-4901-a6f4-d814f50a55dd');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('fcab0130-f325-4276-8a94-2b01362fc028', 'Project Coordinator', 'aef683de-a55d-4d90-8a1d-213a7ed1cfe7', 'a77ee3c8-1330-4bad-9ff4-aa00e4bd630b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ed5dce0a-46f4-4e84-a247-2b45f6940133', 'Innovation Strategist', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '020bab00-df4b-4fa6-b385-a46b8cbd7d66');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('64d2260a-ad03-409d-836a-752762ce8159', 'Project Coordinator', 'b65f3f74-9afb-48dc-85ab-3fe84956d964', '6452e1a3-a77e-4acd-b3f6-f7d65b9771ab');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('30418265-3b29-4092-bd7e-ee27cea13169', 'Collaboration Specialist', 'b65f3f74-9afb-48dc-85ab-3fe84956d964', '020bab00-df4b-4fa6-b385-a46b8cbd7d66');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c563dd27-0490-49f1-b392-a7cbb85174cd', 'Collaboration Specialist', 'aef683de-a55d-4d90-8a1d-213a7ed1cfe7', '020bab00-df4b-4fa6-b385-a46b8cbd7d66');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f6883468-bd94-4817-912b-b16c47ed5286', 'Collaboration Specialist', 'ec21b439-9a24-4ee8-b2fc-cef31ee0059c', 'f1b56048-04da-45e3-947d-60a614de08d5');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('2a4c2541-482f-457a-9eb4-662923277e66', 'Innovation Strategist', '85b3642b-21e5-425e-9e0c-089a7cd31cc1', '651e624f-c0c2-4235-a543-476d7a7ecd11');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('977d5472-72d4-4489-a5c9-4fca86fea617', 'Research Analyst', 'aef683de-a55d-4d90-8a1d-213a7ed1cfe7', '88c34593-e2e5-4d14-8943-34f71d9c37f7');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('6948034d-7735-4140-bdc1-f187d9a21b61', 'Research Analyst', '85b3642b-21e5-425e-9e0c-089a7cd31cc1', 'f1b56048-04da-45e3-947d-60a614de08d5');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('5d8dc0c2-5c60-4b72-8420-dd52cc998e30', 'Daily insights on startup ecosystems', '85b3642b-21e5-425e-9e0c-089a7cd31cc1');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('8e1b1dc1-c74a-4523-bfdb-81600eccc861', 'Biweekly reports on AI advancements', '85b3642b-21e5-425e-9e0c-089a7cd31cc1');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('cd18cc24-7e48-4d5f-9503-1d73ca5e82d5', 'Biweekly reports on AI advancements', 'aef683de-a55d-4d90-8a1d-213a7ed1cfe7');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('eddae855-7fb7-493b-8ab7-05553246bf1b', 'Daily insights on startup ecosystems', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('8c82d642-f940-43a1-b120-66e3ea20f162', 'Monthly updates on global innovation', '85b3642b-21e5-425e-9e0c-089a7cd31cc1');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('0af1ae75-334c-42c1-82ad-b2ba5d63f8e5', 'Biweekly reports on AI advancements', 'ec21b439-9a24-4ee8-b2fc-cef31ee0059c');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('3b15c6c0-1870-4155-ba4d-0e2576225fa8', 'Weekly newsletter on emerging tech trends', 'aef683de-a55d-4d90-8a1d-213a7ed1cfe7');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('146fd123-50f6-45d3-95ed-bb18e720d100', 'Biweekly reports on AI advancements', '85b3642b-21e5-425e-9e0c-089a7cd31cc1');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('f0c8973f-174a-459f-8d87-bbb3b35e01c8', 'Weekly newsletter on emerging tech trends', '7dd6bae1-3b09-4338-ba3d-0826fce9d661');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('6f45c023-a01c-4f05-8e97-484a435e9d73', 'Monthly updates on global innovation', '0bb8a72a-7713-4a6e-90c7-14ba5d283bc9');

INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('2ad5c099-d00f-410d-966c-41ac89a891ef', 'Revolutionary Solar Panel Design', 'Leveraging AI to optimize marketing campaigns and increase ROI.', 'Approved', 'Restricted', 'Healthcare', 'Very High', 'Concept', 'Agriculture', 'c1c40d4c-b7ef-4eb4-b6ab-2eddb7deddb8', 'f1b56048-04da-45e3-947d-60a614de08d5');
INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('ac00a1dd-f1c7-4c5f-80c2-c5a089d88d46', 'NextGen Electric Vehicle Battery', 'Developing a battery with longer life and faster charging for EVs.', 'Rejected', 'Confidential', 'Technology', 'Low', 'Prototype', 'Transportation', 'ec21b439-9a24-4ee8-b2fc-cef31ee0059c', 'a77ee3c8-1330-4bad-9ff4-aa00e4bd630b');
INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('de125ad0-d16b-422e-a501-d11092fb8d7b', 'AIDriven Marketing Strategies', 'Leveraging AI to optimize marketing campaigns and increase ROI.', 'Approved', 'Private', 'Environment', 'Very High', 'Concept', 'Healthcare', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '76f36692-c778-4901-a6f4-d814f50a55dd');
INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('288958be-6028-46b8-abca-6cef47fbd0d7', 'NextGen Electric Vehicle Battery', 'A secure and transparent voting system using blockchain technology.', 'Rejected', 'Restricted', 'Environment', 'Medium', 'Testing', 'Healthcare', '85b3642b-21e5-425e-9e0c-089a7cd31cc1', '6452e1a3-a77e-4acd-b3f6-f7d65b9771ab');
INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('f4ea43c8-8318-416b-93ad-f000fa64f798', 'BlockchainBased Voting System', 'A secure and transparent voting system using blockchain technology.', 'Rejected', 'Private', 'Environment', 'Low', 'Prototype', 'Transportation', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '88c34593-e2e5-4d14-8943-34f71d9c37f7');
INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('b9a31ff6-95a7-415f-8ce9-c4ad5bc8c5aa', 'Revolutionary Solar Panel Design', 'Leveraging AI to optimize marketing campaigns and increase ROI.', 'Rejected', 'Restricted', 'Science', 'Low', 'Concept', 'Healthcare', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '88c34593-e2e5-4d14-8943-34f71d9c37f7');
INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('e9e4ad84-e801-4a3a-b741-c4cb173e1934', 'BlockchainBased Voting System', 'Developing a battery with longer life and faster charging for EVs.', 'Approved', 'Private', 'Environment', 'Low', 'Deployment', 'Transportation', '1cbe7a8f-2622-4e44-b5cb-1efcf70e680e', '6452e1a3-a77e-4acd-b3f6-f7d65b9771ab');
INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('9e3bab5a-0dac-4f4d-a17e-006effaa653e', 'Sustainable Urban Farming', 'Leveraging AI to optimize marketing campaigns and increase ROI.', 'Completed', 'Restricted', 'Environment', 'Very High', 'Maintenance', 'Healthcare', 'c1c40d4c-b7ef-4eb4-b6ab-2eddb7deddb8', '76f36692-c778-4901-a6f4-d814f50a55dd');
INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('9a46990a-ed41-4021-a263-e4e64af28282', 'Sustainable Urban Farming', 'A novel approach to harnessing solar energy with increased efficiency.', 'Completed', 'Internal', 'Business', 'Low', 'Testing', 'Finance', '1cbe7a8f-2622-4e44-b5cb-1efcf70e680e', '13fe5f17-866b-4513-a2e8-543d83f5e455');
INSERT INTO "Idea" ("id", "title", "description", "status", "visibility", "category", "complexity", "stage", "industry", "userId", "organizationId") VALUES ('74103b16-e704-4627-b2cf-c4e72880889f', 'NextGen Electric Vehicle Battery', 'Innovative methods for growing food sustainably in urban areas.', 'Pending Review', 'Internal', 'Environment', 'Medium', 'Testing', 'Healthcare', '7dd6bae1-3b09-4338-ba3d-0826fce9d661', 'a77ee3c8-1330-4bad-9ff4-aa00e4bd630b');

INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('e4bf18f2-f63e-487a-93db-144582bf337a', 'Innovators Hub', 'A collaborative space for tech enthusiasts.', 'Public', 'f1b56048-04da-45e3-947d-60a614de08d5', 'ec21b439-9a24-4ee8-b2fc-cef31ee0059c');
INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('78c09812-1fee-4e29-bd5c-893774ad6f4c', 'Creative Minds', 'Where business ideas come to life.', 'Public', 'f4312f39-deae-4c5f-9ce5-f6046d9d7136', '7dd6bae1-3b09-4338-ba3d-0826fce9d661');
INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('22950869-722a-4c85-b7ce-c4a7a84d49f0', 'Idea Forge', 'A platform for visionary projects.', 'Private', '88c34593-e2e5-4d14-8943-34f71d9c37f7', '1cbe7a8f-2622-4e44-b5cb-1efcf70e680e');
INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('e9edfc38-9540-4e30-98bd-33811a36440a', 'Visionary Lab', 'Forge new ideas in a creative environment.', 'Public', 'a77ee3c8-1330-4bad-9ff4-aa00e4bd630b', '939be57c-3675-4fca-b537-23d78dabcbd0');
INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('2e2faa9d-9273-46f6-8d9d-a55e16b5ea93', 'Global Thinkers', 'Where business ideas come to life.', 'Private', 'a77ee3c8-1330-4bad-9ff4-aa00e4bd630b', 'c1c40d4c-b7ef-4eb4-b6ab-2eddb7deddb8');
INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('f2f8dad5-625d-44ba-ae78-5af645e0badc', 'Global Thinkers', 'A platform for visionary projects.', 'Public', '6c5531c7-3013-4542-86f9-369f4b68b9c9', 'aef683de-a55d-4d90-8a1d-213a7ed1cfe7');
INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('42c38f44-5739-46e1-a50c-84587a9713c0', 'Idea Forge', 'Connecting scientists worldwide.', 'Public', '6c5531c7-3013-4542-86f9-369f4b68b9c9', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('d5291dd6-3d89-429a-a82c-2d3c3681820c', 'Idea Forge', 'Forge new ideas in a creative environment.', 'Public', '6452e1a3-a77e-4acd-b3f6-f7d65b9771ab', '0bb8a72a-7713-4a6e-90c7-14ba5d283bc9');
INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('f5f93e2b-a609-4dd1-a30d-486f3c227491', 'Idea Forge', 'Forge new ideas in a creative environment.', 'Public', '6c5531c7-3013-4542-86f9-369f4b68b9c9', '7dd6bae1-3b09-4338-ba3d-0826fce9d661');
INSERT INTO "Workspace" ("id", "name", "description", "privacy", "organizationId", "userId") VALUES ('0661b71e-25fd-47fc-99a6-038f0a24cff8', 'Creative Minds', 'Where business ideas come to life.', 'Public', '651e624f-c0c2-4235-a543-476d7a7ecd11', 'c1c40d4c-b7ef-4eb4-b6ab-2eddb7deddb8');

INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('06ab2855-57a6-4236-872b-18bdb2587db2', 'Viewer', 'Delete', '2e2faa9d-9273-46f6-8d9d-a55e16b5ea93', '0bb8a72a-7713-4a6e-90c7-14ba5d283bc9');
INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('b655b84b-f639-4830-814f-1958551fcfab', 'Viewer', 'Edit', '2e2faa9d-9273-46f6-8d9d-a55e16b5ea93', '1cbe7a8f-2622-4e44-b5cb-1efcf70e680e');
INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('b0676b2c-4229-44a3-afec-25ee7e2bf84b', 'Viewer', 'Edit', '0661b71e-25fd-47fc-99a6-038f0a24cff8', 'c1c40d4c-b7ef-4eb4-b6ab-2eddb7deddb8');
INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('d1de934e-933b-45e0-a7cb-0d269c4ca4be', 'Moderator', 'Write', 'f2f8dad5-625d-44ba-ae78-5af645e0badc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('efdec770-62b8-45d1-b8ec-96760c6a0604', 'Admin', 'Delete', 'f5f93e2b-a609-4dd1-a30d-486f3c227491', '1cbe7a8f-2622-4e44-b5cb-1efcf70e680e');
INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('dddde63e-8f4a-453e-8645-c4d885e21a47', 'Viewer', 'Delete', 'f5f93e2b-a609-4dd1-a30d-486f3c227491', 'aef683de-a55d-4d90-8a1d-213a7ed1cfe7');
INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('81702f0b-2bec-4644-8463-166c048f0f8a', 'Viewer', 'Manage', 'e4bf18f2-f63e-487a-93db-144582bf337a', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('cae248c5-6007-45f9-b75e-4177eea53570', 'Viewer', 'Edit', 'e4bf18f2-f63e-487a-93db-144582bf337a', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('8204bcc1-5bee-481d-8c1a-8be0ea68737c', 'Admin', 'Delete', 'f5f93e2b-a609-4dd1-a30d-486f3c227491', '85b3642b-21e5-425e-9e0c-089a7cd31cc1');
INSERT INTO "WorkspaceMember" ("id", "role", "permission", "workspaceId", "userId") VALUES ('6347fa30-168a-4b45-ad07-8fa9a2ac68ef', 'Moderator', 'Manage', '2e2faa9d-9273-46f6-8d9d-a55e16b5ea93', '85b3642b-21e5-425e-9e0c-089a7cd31cc1');

INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('8c6cd099-6e3b-4558-b702-34c8eedab7d9', '78c09812-1fee-4e29-bd5c-893774ad6f4c', 'de125ad0-d16b-422e-a501-d11092fb8d7b');
INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('de999174-cfd4-403f-a092-16e885e0932f', '0661b71e-25fd-47fc-99a6-038f0a24cff8', '9a46990a-ed41-4021-a263-e4e64af28282');
INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('b9870fed-9db0-4b61-b446-853ae7fa5ed8', 'e9edfc38-9540-4e30-98bd-33811a36440a', 'ac00a1dd-f1c7-4c5f-80c2-c5a089d88d46');
INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('ccd11545-bd57-4fac-9d30-870a57b237d2', '78c09812-1fee-4e29-bd5c-893774ad6f4c', '2ad5c099-d00f-410d-966c-41ac89a891ef');
INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('9bad1f24-1aee-4b97-8541-496ea2247c5d', 'e9edfc38-9540-4e30-98bd-33811a36440a', 'e9e4ad84-e801-4a3a-b741-c4cb173e1934');
INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('f51c5ec4-3312-4572-a194-2d422edb9a27', '42c38f44-5739-46e1-a50c-84587a9713c0', '2ad5c099-d00f-410d-966c-41ac89a891ef');
INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('e35bc982-548f-4332-993f-121603d41fa5', '22950869-722a-4c85-b7ce-c4a7a84d49f0', 'de125ad0-d16b-422e-a501-d11092fb8d7b');
INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('ed3be631-0217-4672-a753-29bcebc9c0e4', 'd5291dd6-3d89-429a-a82c-2d3c3681820c', '9a46990a-ed41-4021-a263-e4e64af28282');
INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('e228b678-1cb7-4da8-bd27-1605b139c844', '2e2faa9d-9273-46f6-8d9d-a55e16b5ea93', 'de125ad0-d16b-422e-a501-d11092fb8d7b');
INSERT INTO "WorkspaceIdea" ("id", "workspaceId", "ideaId") VALUES ('184953b5-df8c-4f4a-91c8-670a0081c1a9', '42c38f44-5739-46e1-a50c-84587a9713c0', '9e3bab5a-0dac-4f4d-a17e-006effaa653e');

INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('6cb9a4a1-f8ea-4b06-94ae-322f036eb915', 'Can we add more examples to the description for clarity', '2ad5c099-d00f-410d-966c-41ac89a891ef', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('6735359f-c75e-4b6f-a19d-c5ab2b8ba089', 'This idea has great potential for scalability.', 'ac00a1dd-f1c7-4c5f-80c2-c5a089d88d46', '1cbe7a8f-2622-4e44-b5cb-1efcf70e680e');
INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('fa3358e8-79d8-4336-a02e-3cefba6f5212', 'The concept is innovative but the execution needs refinement.', 'b9a31ff6-95a7-415f-8ce9-c4ad5bc8c5aa', 'b65f3f74-9afb-48dc-85ab-3fe84956d964');
INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('556c1159-f5c0-46d8-a2e2-83d82f5562d3', 'The concept is innovative but the execution needs refinement.', 'b9a31ff6-95a7-415f-8ce9-c4ad5bc8c5aa', '7dd6bae1-3b09-4338-ba3d-0826fce9d661');
INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('a4f4e663-c631-4c0a-908c-a0875d763e4e', 'I think the analysis could be improved with more data.', '2ad5c099-d00f-410d-966c-41ac89a891ef', '939be57c-3675-4fca-b537-23d78dabcbd0');
INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('74024e4b-a937-4db3-b512-af49986f24c7', 'I love the collaboration features in this workspace', '74103b16-e704-4627-b2cf-c4e72880889f', '7dd6bae1-3b09-4338-ba3d-0826fce9d661');
INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('ee935916-cdb9-4be8-b22e-abb811d769bd', 'This idea has great potential for scalability.', 'b9a31ff6-95a7-415f-8ce9-c4ad5bc8c5aa', 'ec21b439-9a24-4ee8-b2fc-cef31ee0059c');
INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('196fd7cb-8f34-4aa7-b9c6-6b1f8ebc3c49', 'The concept is innovative but the execution needs refinement.', 'de125ad0-d16b-422e-a501-d11092fb8d7b', 'b65f3f74-9afb-48dc-85ab-3fe84956d964');
INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('8bd3bfbe-8dc6-4e50-8e8b-12a6e6403cd9', 'The concept is innovative but the execution needs refinement.', 'de125ad0-d16b-422e-a501-d11092fb8d7b', 'c1c40d4c-b7ef-4eb4-b6ab-2eddb7deddb8');
INSERT INTO "Comment" ("id", "content", "ideaId", "userId") VALUES ('24cc99be-06cb-430d-84bc-3c50516d815b', 'The concept is innovative but the execution needs refinement.', 'f4ea43c8-8318-416b-93ad-f000fa64f798', '1cbe7a8f-2622-4e44-b5cb-1efcf70e680e');

INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('dfa63a88-8386-4456-8030-b12084175a07', 'New Idea Alert', 'System maintenance will occur this weekend.', true, 580, '939be57c-3675-4fca-b537-23d78dabcbd0');
INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('7b05aa16-3e16-4055-9791-fd1c9b5bcc7b', 'System Alert', 'You have a new comment on your idea.', false, 614, 'b65f3f74-9afb-48dc-85ab-3fe84956d964');
INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('cee08900-8fcd-4dc5-90f2-94f1e64b16ed', 'System Alert', 'System maintenance will occur this weekend.', true, 340, 'b65f3f74-9afb-48dc-85ab-3fe84956d964');
INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('ad13e085-4638-4161-9963-93e3e8ab6936', 'Subscription Reminder', 'Your workspace has been updated with new members.', true, 667, '939be57c-3675-4fca-b537-23d78dabcbd0');
INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('642a3d67-7a13-4fdc-917c-e8da5a0c8cb5', 'Comment Notification', 'A new idea in your favorite category has been added.', true, 496, 'ec21b439-9a24-4ee8-b2fc-cef31ee0059c');
INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('4db2b303-8b44-466f-affe-3064bff41c9a', 'New Idea Alert', 'System maintenance will occur this weekend.', false, 805, 'aef683de-a55d-4d90-8a1d-213a7ed1cfe7');
INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('c01f6cac-9ca4-4d80-aed1-04616a1c66a9', 'System Alert', 'You have a new comment on your idea.', true, 439, 'ec21b439-9a24-4ee8-b2fc-cef31ee0059c');
INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('16c9ce54-5bd2-4bcf-85ed-82889afd07af', 'New Idea Alert', 'You have a new comment on your idea.', true, 8, '939be57c-3675-4fca-b537-23d78dabcbd0');
INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('5ce48b29-0020-4f75-95cb-56bedb44f7ae', 'System Alert', 'Your subscription is due for renewal soon.', true, 768, 'b65f3f74-9afb-48dc-85ab-3fe84956d964');
INSERT INTO "Notification" ("id", "type", "content", "read", "priority", "userId") VALUES ('545cba2d-7d55-4d2b-982b-73cfdc39c145', 'System Alert', 'Your workspace has been updated with new members.', false, 8, '1cbe7a8f-2622-4e44-b5cb-1efcf70e680e');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
