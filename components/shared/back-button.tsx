import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = ({ className }: { className?: string }) => {
	const router = useRouter();

	return (
		<button type="button" onClick={() => router.back()} className={className}>
			<Undo2 size={18} />
		</button>
	);
};

export default BackButton;
