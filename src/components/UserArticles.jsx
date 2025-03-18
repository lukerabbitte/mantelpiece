"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteArticle } from "@/utils/serverActions/deleteArticle";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const UserArticles = ({ articles = [], isOwnProfile }) => {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    const [articleToDelete, setArticleToDelete] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    if (!articles || articles.length === 0) {
        return <p className="text-muted-foreground">No articles found.</p>;
    }

    const handleDeleteClick = (article) => {
        setArticleToDelete(article);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (!articleToDelete) return;

        try {
            setIsDeleting(true);
            const result = await deleteArticle(articleToDelete.hash_id);

            if (result.data) {
                toast.success("Article deleted successfully");
            } else {
                toast.error(result.error || "Failed to delete article");
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("An unexpected error occurred");
        } finally {
            setIsDeleting(false);
            setDeleteDialogOpen(false);
            setArticleToDelete(null);
        }
    };

    return (
        <>
            <ul className="w-full h-full flex flex-col items-center">
                <div className="border-b-2 w-full max-w-prose"></div>
                {articles.map((article) => (
                    <li
                        key={article.hash_id}
                        className="border-b-2 p-4 w-full max-w-prose flex flex-row justify-between items-center gap-4 text-start text-balance"
                    >
                        <Link
                            href={`/posts/${article.hash_id}/${article.slug}`}
                            className="hover:underline"
                            target="_blank"
                        >
                            <p className="font-semibold">{article.title}</p>
                        </Link>

                        {isOwnProfile && (
                            <div className="flex gap-4">
                                <Button
                                    asChild
                                    size="evenPad"
                                    title="Edit Article"
                                    className="transition-all duration-400 hover:opacity-90 hover:scale-105 rounded-full"
                                >
                                    <Link href={`/posts/edit/${article.hash_id}/${article.slug}`}>
                                        <div className="bg-primary-foreground rounded-full flex justify-center items-center">
                                            <FaEdit className="text-foreground p-[0.45rem] w-7 h-7" />
                                        </div>
                                    </Link>
                                </Button>
                                <Button
                                    size="evenPad"
                                    title="Delete Article"
                                    onClick={() => handleDeleteClick(article)}
                                    className="transition-all duration-400 hover:opacity-90 hover:scale-105 rounded-full"
                                >
                                    <div className="bg-primary-foreground rounded-full flex justify-center items-center">
                                        <FaTrash className="text-foreground p-[0.45rem] w-7 h-7" />
                                    </div>
                                </Button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            {`This will permanently delete "${articleToDelete?.title}". This action cannot be undone.`}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteConfirm}
                            disabled={isDeleting}
                            className="bg-destructive hover:opacity-90"
                        >
                            {isDeleting ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default UserArticles;
