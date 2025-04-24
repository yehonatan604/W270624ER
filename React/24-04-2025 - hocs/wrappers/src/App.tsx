import Flex, { FlexDirectionTypes } from "./components/Flex";
import MyCard from "./components/MyCard";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-4 py-24 dark:bg-gray-900">
      <Flex direction={FlexDirectionTypes.Row}>
        <MyCard>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <MyCard>iutyiutiut</MyCard>
        </MyCard>

        <MyCard>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <MyCard>iutyiutiut</MyCard>
        </MyCard>
      </Flex>

      <Flex direction={FlexDirectionTypes.Row}>
        <MyCard>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <MyCard>iutyiutiut</MyCard>
        </MyCard>

        <MyCard>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <MyCard>iutyiutiut</MyCard>
        </MyCard>
      </Flex>
    </main>
  );
}
