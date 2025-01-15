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

        createMany: procedure.input($Schema.WorkspaceInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspace.createMany(input as any))),

        create: procedure.input($Schema.WorkspaceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspace.create(input as any))),

        deleteMany: procedure.input($Schema.WorkspaceInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspace.deleteMany(input as any))),

        delete: procedure.input($Schema.WorkspaceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspace.delete(input as any))),

        findFirst: procedure.input($Schema.WorkspaceInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).workspace.findFirst(input as any))),

        findMany: procedure.input($Schema.WorkspaceInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).workspace.findMany(input as any))),

        findUnique: procedure.input($Schema.WorkspaceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).workspace.findUnique(input as any))),

        updateMany: procedure.input($Schema.WorkspaceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspace.updateMany(input as any))),

        update: procedure.input($Schema.WorkspaceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspace.update(input as any))),

        count: procedure.input($Schema.WorkspaceInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).workspace.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WorkspaceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WorkspaceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkspaceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkspaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkspaceGetPayload<T>, Context>) => Promise<Prisma.WorkspaceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WorkspaceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WorkspaceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkspaceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkspaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkspaceGetPayload<T>, Context>) => Promise<Prisma.WorkspaceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WorkspaceFindFirstArgs, TData = Prisma.WorkspaceGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.WorkspaceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkspaceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkspaceFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorkspaceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkspaceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkspaceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WorkspaceFindManyArgs, TData = Array<Prisma.WorkspaceGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.WorkspaceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WorkspaceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkspaceFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorkspaceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WorkspaceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WorkspaceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WorkspaceFindUniqueArgs, TData = Prisma.WorkspaceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WorkspaceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkspaceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkspaceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WorkspaceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkspaceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkspaceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WorkspaceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WorkspaceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkspaceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkspaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkspaceGetPayload<T>, Context>) => Promise<Prisma.WorkspaceGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.WorkspaceCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorkspaceCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.WorkspaceCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.WorkspaceCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.WorkspaceCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.WorkspaceCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WorkspaceCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorkspaceCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
