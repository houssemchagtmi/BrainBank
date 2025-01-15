/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.WorkspaceIdeaInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceIdea.createMany(input as any))),

        create: procedure.input($Schema.WorkspaceIdeaInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceIdea.create(input as any))),

        deleteMany: procedure.input($Schema.WorkspaceIdeaInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceIdea.deleteMany(input as any))),

        delete: procedure.input($Schema.WorkspaceIdeaInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceIdea.delete(input as any))),

        findFirst: procedure.input($Schema.WorkspaceIdeaInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).workspaceIdea.findFirst(input as any))),

        findMany: procedure.input($Schema.WorkspaceIdeaInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).workspaceIdea.findMany(input as any))),

        findUnique: procedure.input($Schema.WorkspaceIdeaInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).workspaceIdea.findUnique(input as any))),

        updateMany: procedure.input($Schema.WorkspaceIdeaInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceIdea.updateMany(input as any))),

        update: procedure.input($Schema.WorkspaceIdeaInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceIdea.update(input as any))),

        count: procedure.input($Schema.WorkspaceIdeaInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).workspaceIdea.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WorkspaceIdeaCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceIdeaCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceIdeaCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceIdeaCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WorkspaceIdeaCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceIdeaCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkspaceIdeaGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkspaceIdeaGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceIdeaCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceIdeaCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkspaceIdeaGetPayload<T>, Context>) => Promise<Prisma.WorkspaceIdeaGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WorkspaceIdeaDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceIdeaDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceIdeaDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceIdeaDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WorkspaceIdeaDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceIdeaDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkspaceIdeaGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkspaceIdeaGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceIdeaDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceIdeaDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkspaceIdeaGetPayload<T>, Context>) => Promise<Prisma.WorkspaceIdeaGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WorkspaceIdeaFindFirstArgs, TData = Prisma.WorkspaceIdeaGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.WorkspaceIdeaFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkspaceIdeaGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkspaceIdeaFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorkspaceIdeaFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkspaceIdeaGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkspaceIdeaGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WorkspaceIdeaFindManyArgs, TData = Array<Prisma.WorkspaceIdeaGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.WorkspaceIdeaFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WorkspaceIdeaGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkspaceIdeaFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorkspaceIdeaFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WorkspaceIdeaGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WorkspaceIdeaGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WorkspaceIdeaFindUniqueArgs, TData = Prisma.WorkspaceIdeaGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WorkspaceIdeaFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkspaceIdeaGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkspaceIdeaFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WorkspaceIdeaFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkspaceIdeaGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkspaceIdeaGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WorkspaceIdeaUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceIdeaUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceIdeaUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceIdeaUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WorkspaceIdeaUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceIdeaUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkspaceIdeaGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkspaceIdeaGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceIdeaUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceIdeaUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkspaceIdeaGetPayload<T>, Context>) => Promise<Prisma.WorkspaceIdeaGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.WorkspaceIdeaCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorkspaceIdeaCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.WorkspaceIdeaCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.WorkspaceIdeaCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.WorkspaceIdeaCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.WorkspaceIdeaCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WorkspaceIdeaCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorkspaceIdeaCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
