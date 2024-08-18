import { LessonContent } from "../components/lesson_content";
import NoContent from "../components/no_content";
import PracticeTest from "../components/practice_test";
import Header from "../header/header";
import { useLesson } from "../store/setting_lesson";

interface ILayout {
  children: React.ReactNode;
}
export default function Layout(props: ILayout) {
  const { children } = props;
  const { selectedLesson,isTest } = useLesson((state) => ({
    selectedLesson: state.selectedLesson,
    isTest : state.isTest
  }))
  return <>
    <Header />
    <div className="h-full w-full flex justify-center items-center">
      {isTest ? <PracticeTest/> : selectedLesson ? <LessonContent /> : <NoContent />}
    </div>
    {children}
  </>
}