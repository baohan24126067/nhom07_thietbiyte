"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { ChevronRight, RefreshCcw, Stethoscope, Heart, Activity, Thermometer } from "lucide-react";

const questions = [
  {
    id: 1,
    text: "Bạn quan tâm đến vấn đề sức khỏe nào nhất hiện nay?",
    options: [
      { label: "Huyết áp và Tim mạch", icon: Heart, category: "Máy đo huyết áp" },
      { label: "Đường huyết và Tiểu đường", icon: Activity, category: "Máy đo đường huyết" },
      { label: "Sốt và Nhiệt độ cơ thể", icon: Thermometer, category: "Nhiệt kế" },
      { label: "Thư giãn và Giảm đau cơ", icon: Stethoscope, category: "Máy massage" },
    ],
  },
  {
    id: 2,
    text: "Đối tượng sử dụng chính là ai?",
    options: [
      { label: "Người cao tuổi (cần dễ sử dụng, màn hình to)", value: "elderly" },
      { label: "Người trẻ năng động (cần nhỏ gọn, kết nối app)", value: "young" },
      { label: "Cả gia đình (cần đa năng, bộ nhớ nhiều người)", value: "family" },
    ],
  },
];

export default function SymptomCheckerPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleAnswer = (answer: any) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate recommendations
      const category = newAnswers[0].category;
      const type = newAnswers[1].value;

      let filtered = products.filter((p) => p.category === category);
      
      // Simple logic for "elderly" preference (prefer easy to use or premium)
      if (type === "elderly") {
        filtered = filtered.sort((a, b) => b.price - a.price).slice(0, 2);
      } else if (type === "young") {
        filtered = filtered.sort((a, b) => a.price - b.price).slice(0, 2);
      } else {
        filtered = filtered.slice(0, 2);
      }

      setRecommendations(filtered);
      setStep(questions.length);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setRecommendations([]);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-[var(--color-brand)] rounded-2xl shadow-lg mb-4"
          >
            <Stethoscope className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl font-black text-[var(--color-ink)] sm:text-4xl">
            Trợ lý <span className="text-[var(--color-brand)]">Tư vấn Sức khỏe</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] font-medium">
            Trả lời vài câu hỏi ngắn để chúng tôi gợi ý thiết bị y tế phù hợp nhất với bạn.
          </p>
        </div>

        <div className="bg-[var(--color-card)] rounded-[32px] border border-[var(--color-line)] shadow-xl overflow-hidden p-8 sm:p-12 relative min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step < questions.length ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)] font-bold">
                    {step + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-[var(--color-ink)]">
                    {questions[step].text}
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {questions[step].options.map((option: any, idx) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option)}
                        className="flex items-center gap-4 p-6 text-left rounded-2xl border-2 border-[var(--color-line)] hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)] transition-all group"
                      >
                        {Icon && (
                          <div className="p-3 bg-[var(--color-surface)] rounded-xl group-hover:bg-[var(--color-surface-strong)] transition-colors">
                            <Icon className="w-6 h-6 text-[var(--color-brand)]" />
                          </div>
                        )}
                        <span className="font-bold text-[var(--color-ink)]">{option.label}</span>
                        <ChevronRight className="w-5 h-5 ml-auto text-[var(--color-muted)] group-hover:text-[var(--color-brand)] transition-transform group-hover:translate-x-1" />
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-[var(--color-ink)]">
                    Gợi ý thiết bị dành riêng cho bạn
                  </h2>
                  <p className="text-[var(--color-muted)] mt-2">
                    Dựa trên nhu cầu chăm sóc sức khỏe cho {answers[1]?.label.toLowerCase()}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {recommendations.map((product, idx) => (
                    <ProductCard key={product.id} product={product} index={idx} />
                  ))}
                </div>

                <div className="flex justify-center pt-8">
                  <button
                    onClick={reset}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-surface-strong)] text-[var(--color-ink)] font-bold hover:bg-[var(--color-line)] transition-colors"
                  >
                    <RefreshCcw className="w-5 h-5" />
                    Thực hiện lại
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
