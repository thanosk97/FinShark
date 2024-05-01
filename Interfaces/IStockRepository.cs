using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Models;

namespace api.bin.Interfaces
{
    public interface IStockRepository
    {
        Task<List<Stock>> GetAllAsync(); 
        Task<Stock?> GetByIdAsync(int id); //FirstOrDefault can return null. That's why we need the '?'. Essentially allows it to be null.
        Task<Stock> CreateAsync(Stock stockModel);
        Task<Stock?> UpdateAsync(int id, UpdateStockRequestDto stockDto);
        Task<Stock?> DeleteAsync(int id);

    }
}