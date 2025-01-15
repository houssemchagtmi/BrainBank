/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createIdeaRouter from "./Idea.router";
import createWorkspaceRouter from "./Workspace.router";
import createWorkspaceMemberRouter from "./WorkspaceMember.router";
import createWorkspaceIdeaRouter from "./WorkspaceIdea.router";
import createCommentRouter from "./Comment.router";
import createNotificationRouter from "./Notification.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createPwaSubscriptionRouter from "./PwaSubscription.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as IdeaClientType } from "./Idea.router";
import { ClientType as WorkspaceClientType } from "./Workspace.router";
import { ClientType as WorkspaceMemberClientType } from "./WorkspaceMember.router";
import { ClientType as WorkspaceIdeaClientType } from "./WorkspaceIdea.router";
import { ClientType as CommentClientType } from "./Comment.router";
import { ClientType as NotificationClientType } from "./Notification.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as PwaSubscriptionClientType } from "./PwaSubscription.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        idea: createIdeaRouter(router, procedure),
        workspace: createWorkspaceRouter(router, procedure),
        workspaceMember: createWorkspaceMemberRouter(router, procedure),
        workspaceIdea: createWorkspaceIdeaRouter(router, procedure),
        comment: createCommentRouter(router, procedure),
        notification: createNotificationRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        pwaSubscription: createPwaSubscriptionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    idea: IdeaClientType<AppRouter>;
    workspace: WorkspaceClientType<AppRouter>;
    workspaceMember: WorkspaceMemberClientType<AppRouter>;
    workspaceIdea: WorkspaceIdeaClientType<AppRouter>;
    comment: CommentClientType<AppRouter>;
    notification: NotificationClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    pwaSubscription: PwaSubscriptionClientType<AppRouter>;
}
