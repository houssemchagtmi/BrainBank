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

        createMany: procedure.input($Schema.WorkspaceMemberInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceMember.createMany(input as any))),

        create: procedure.input($Schema.WorkspaceMemberInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceMember.create(input as any))),

        deleteMany: procedure.input($Schema.WorkspaceMemberInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceMember.deleteMany(input as any))),

        delete: procedure.input($Schema.WorkspaceMemberInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceMember.delete(input as any))),

        findFirst: procedure.input($Schema.WorkspaceMemberInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).workspaceMember.findFirst(input as any))),

        findMany: procedure.input($Schema.WorkspaceMemberInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).workspaceMember.findMany(input as any))),

        findUnique: procedure.input($Schema.WorkspaceMemberInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).workspaceMember.findUnique(input as any))),

        updateMany: procedure.input($Schema.WorkspaceMemberInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceMember.updateMany(input as any))),

        update: procedure.input($Schema.WorkspaceMemberInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workspaceMember.update(input as any))),

        count: procedure.input($Schema.WorkspaceMemberInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).workspaceMember.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WorkspaceMemberCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceMemberCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceMemberCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceMemberCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WorkspaceMemberCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceMemberCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkspaceMemberGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkspaceMemberGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceMemberCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceMemberCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkspaceMemberGetPayload<T>, Context>) => Promise<Prisma.WorkspaceMemberGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WorkspaceMemberDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceMemberDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceMemberDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceMemberDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WorkspaceMemberDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceMemberDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkspaceMemberGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkspaceMemberGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceMemberDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceMemberDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkspaceMemberGetPayload<T>, Context>) => Promise<Prisma.WorkspaceMemberGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WorkspaceMemberFindFirstArgs, TData = Prisma.WorkspaceMemberGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.WorkspaceMemberFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkspaceMemberGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkspaceMemberFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorkspaceMemberFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkspaceMemberGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkspaceMemberGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WorkspaceMemberFindManyArgs, TData = Array<Prisma.WorkspaceMemberGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.WorkspaceMemberFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WorkspaceMemberGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkspaceMemberFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorkspaceMemberFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WorkspaceMemberGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WorkspaceMemberGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WorkspaceMemberFindUniqueArgs, TData = Prisma.WorkspaceMemberGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WorkspaceMemberFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkspaceMemberGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkspaceMemberFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WorkspaceMemberFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkspaceMemberGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkspaceMemberGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WorkspaceMemberUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceMemberUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceMemberUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceMemberUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WorkspaceMemberUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkspaceMemberUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkspaceMemberGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkspaceMemberGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkspaceMemberUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkspaceMemberUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkspaceMemberGetPayload<T>, Context>) => Promise<Prisma.WorkspaceMemberGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.WorkspaceMemberCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorkspaceMemberCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.WorkspaceMemberCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.WorkspaceMemberCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.WorkspaceMemberCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.WorkspaceMemberCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WorkspaceMemberCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorkspaceMemberCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
