export default interface UseCase<In, Out> {
    execute(In: In): Promise<Out>
}