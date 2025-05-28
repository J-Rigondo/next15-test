import { StateChanger } from '@/widgets/state-changer';

export default function UseStatePage() {
  return (
    <div className="p-20">
      <h1 className="text-xl font-bold text-gray-900 my-6">
        UseState initialState에 props를 넣을 경우 리렌더링과 상관없이 단 한번만
        초기화 된다.
      </h1>
      <StateChanger />
    </div>
  );
}
