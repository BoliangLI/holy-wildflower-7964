
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg bg-zinc-900 border-zinc-800">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-white">
            Hello World
          </CardTitle>
          <CardDescription className="text-zinc-400">
            欢迎使用基于 React + TypeScript + Tailwind CSS 构建的现代 Web 应用
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-zinc-400 mb-4">
            这是一个使用 shadcn/ui 组件库创建的示例页面。
          </p>
          <Button className="w-full bg-white text-black hover:bg-zinc-200">
            开始探索
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
