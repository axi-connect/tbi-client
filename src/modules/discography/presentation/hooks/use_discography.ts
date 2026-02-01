"use client";

import { useState, useEffect } from "react";
import { Album } from "../../domain/entities/album.entity";
import { getDiscographyService } from "../../infrastructure/di/container";

export const useDiscography = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiscography = async () => {
      try {
        const service = getDiscographyService();
        const data = await service.execute();
        setAlbums(data);
      } catch (err) {
        setError("Error al cargar la discografía");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscography();
  }, []);

  return { albums, loading, error };
};

