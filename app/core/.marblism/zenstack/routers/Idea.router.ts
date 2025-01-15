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

        createMany: procedure.input($Schema.IdeaInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).idea.createMany(input as any))),

        create: procedure.input($Schema.IdeaInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).idea.create(input as any))),

        deleteMany: procedure.input($Schema.IdeaInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).idea.deleteMany(input as any))),

        delete: procedure.input($Schema.IdeaInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).idea.delete(input as any))),

        findFirst: procedure.input($Schema.IdeaInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).idea.findFirst(input as any))),

        findMany: procedure.input($Schema.IdeaInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).idea.findMany(input as any))),

        findUnique: procedure.input($Schema.IdeaInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).idea.findUnique(input as any))),

        updateMany: procedure.input($Schema.IdeaInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).idea.updateMany(input as any))),

        update: procedure.input($Schema.IdeaInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).idea.update(input as any))),

        count: procedure.input($Schema.IdeaInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).idea.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.IdeaCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.IdeaCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.IdeaCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.IdeaCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.IdeaCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.IdeaCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.IdeaGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.IdeaGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.IdeaCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.IdeaCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.IdeaGetPayload<T>, Context>) => Promise<Prisma.IdeaGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.IdeaDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.IdeaDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.IdeaDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.IdeaDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.IdeaDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.IdeaDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.IdeaGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.IdeaGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.IdeaDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.IdeaDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.IdeaGetPayload<T>, Context>) => Promise<Prisma.IdeaGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.IdeaFindFirstArgs, TData = Prisma.IdeaGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.IdeaFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.IdeaGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.IdeaFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.IdeaFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.IdeaGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.IdeaGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.IdeaFindManyArgs, TData = Array<Prisma.IdeaGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.IdeaFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.IdeaGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.IdeaFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.IdeaFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.IdeaGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.IdeaGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.IdeaFindUniqueArgs, TData = Prisma.IdeaGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.IdeaFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.IdeaGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.IdeaFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.IdeaFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.IdeaGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.IdeaGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.IdeaUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.IdeaUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.IdeaUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.IdeaUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.IdeaUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.IdeaUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.IdeaGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.IdeaGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.IdeaUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.IdeaUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.IdeaGetPayload<T>, Context>) => Promise<Prisma.IdeaGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.IdeaCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.IdeaCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.IdeaCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.IdeaCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.IdeaCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.IdeaCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.IdeaCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.IdeaCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
