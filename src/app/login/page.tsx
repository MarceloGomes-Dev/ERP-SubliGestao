"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/store/useAuth';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const login = useAuth((state) => state.login);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const getMotivacional = (role: string) => {
    switch(role) {
      case 'Developer': return "Transformando café em código e soluções inovadoras.";
      case 'RH': return "Cuidando do nosso maior bem: as pessoas.";
      case 'CEO': return "Liderando o futuro com visão e estratégia.";
      default: return "Bem-vindo de volta! Vamos fazer acontecer hoje.";
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Hardcoded developer login as requested
    if (username === '@Marcelo-dev' && password === 'Clara2105*') {
      setIsLoading(true);
      setLoadingMessage(getMotivacional('Developer'));

      setTimeout(() => {
        login(username, 'Developer');
        router.push('/dashboard');
      }, 3000);
    }
    // Example RH login for testing the module
    else if (username === '@RH' && password === 'Rh2024*') {
        setIsLoading(true);
        setLoadingMessage(getMotivacional('RH'));

        setTimeout(() => {
          login(username, 'RH');
          router.push('/dashboard/rh');
        }, 3000);
    }
    else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white text-slate-900 overflow-hidden font-sans">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2563EB] text-white"
          >
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mb-8"
            />
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-4"
            >
              Bem-vindo, {username}!
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl max-w-md text-center text-blue-100"
            >
              {loadingMessage}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Esquerda: 70% com a logo e design azul */}
      <div className="hidden lg:flex lg:w-[70%] bg-[#2563EB] relative items-center justify-center overflow-hidden">
         {/* Efeitos de background */}
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-black/10 rounded-full blur-3xl"></div>

         <div className="relative z-10 flex flex-col items-center">
            <Image
                src="https://github.com/MarceloGomes-Dev/ERP-SubliGestao/blob/main/logo%20ts.png?raw=true"
                alt="Logo SubliGestão"
                width={400}
                height={200}
                priority
                className="drop-shadow-2xl mb-8"
                unoptimized
            />
            <h1 className="text-white text-4xl font-extrabold tracking-tight">ERP SubliGestão</h1>
            <p className="text-blue-100 mt-4 text-lg">O sistema inteligente para o seu negócio.</p>
         </div>
      </div>

      {/* Direita: 30% com o formulário */}
      <div className="w-full lg:w-[30%] flex flex-col justify-center items-center p-8 lg:p-12 bg-white relative">
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-sm"
        >
            {/* Logo para mobile */}
            <div className="flex lg:hidden justify-center mb-8 bg-[#2563EB] p-6 rounded-2xl">
               <Image
                src="https://github.com/MarceloGomes-Dev/ERP-SubliGestao/blob/main/logo%20ts.png?raw=true"
                alt="Logo SubliGestão"
                width={200}
                height={100}
                unoptimized
               />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
            <p className="text-gray-500 mb-8">Insira suas credenciais para acessar o sistema.</p>

            <form onSubmit={handleLogin} className="space-y-6" autoComplete="off">
                {/* Inputs com name randomizados ou off para prevenir preenchimento automático */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Usuário</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all text-gray-900 bg-gray-50"
                        placeholder="Digite seu usuário"
                        autoComplete="new-password"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all text-gray-900 bg-gray-50"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        required
                    />
                </div>

                {error && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm font-medium"
                    >
                        {error}
                    </motion.p>
                )}

                <button
                    type="submit"
                    className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg hover:shadow-xl flex justify-center items-center"
                >
                    Entrar no Sistema
                </button>
            </form>

        </motion.div>
      </div>
    </div>
  );
}
